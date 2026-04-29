import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Package, AlertTriangle, ExternalLink } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  description: string;
  url: string;
  images: { url: string }[];
  variants: {
    price: { currency: string; value: string };
  }[];
}

export default function ArtifactsGallery() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('/api/squarespace/products');
        const data = await res.json();
        
        if (data.success) {
          setProducts(data.products);
        } else {
          setError(data.message);
        }
      } catch (err) {
        setError('Failed to securely link to Aether-Domain inventory.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section id="artifacts-gallery" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h2 className="text-sm font-bold tracking-[0.3em] text-nexus-cyan uppercase mb-4">Domain Inventory</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold">AETHERIC ARTIFACTS</h3>
          </div>
          <p className="text-white/40 max-w-sm text-sm leading-relaxed">
            Tangible manifestations of the Logic Forge. Syncing live from the Squarespace Commerce grid.
          </p>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 text-nexus-cyan">
            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }}>
              <Package className="w-12 h-12 mb-4" />
            </motion.div>
            <div className="font-mono text-sm tracking-widest uppercase">Fetching Domain Artifacts...</div>
          </div>
        ) : error ? (
          <div className="glass p-8 rounded-2xl border border-yellow-500/30 flex flex-col items-center text-center">
            <AlertTriangle className="w-12 h-12 text-yellow-500 mb-4" />
            <h4 className="text-xl font-bold mb-2">Sync Protocol Failed</h4>
            <p className="text-white/50 text-sm mb-4 max-w-md">{error}</p>
            <div className="text-xs text-yellow-500/70 font-mono">Ensure SQUARESPACE_API_KEY has required commerce permissions.</div>
          </div>
        ) : products.length === 0 ? (
          <div className="glass p-12 rounded-2xl flex flex-col items-center text-center border-dashed border-white/10">
            <Package className="w-12 h-12 text-white/20 mb-4" />
            <h4 className="text-xl font-bold mb-2 text-white/50">Void Storage Empty</h4>
            <p className="text-white/30 text-sm">No artifacts detected in the current domain grid.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group glass rounded-2xl overflow-hidden flex flex-col h-full border border-white/5 hover:border-nexus-cyan/30 transition-colors"
              >
                <div className="relative h-64 bg-black/50 overflow-hidden">
                  {product.images?.[0] ? (
                    <img 
                      src={product.images[0].url} 
                      alt={product.name} 
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-white/10">
                      <Package className="w-16 h-16" />
                    </div>
                  )}
                  
                  {/* Futuristic overlay elements */}
                  <div className="absolute top-4 right-4 bg-nexus-cyan/20 backdrop-blur-md px-3 py-1 rounded text-xs font-mono text-nexus-cyan font-bold border border-nexus-cyan/30">
                    {product.variants?.[0]?.price?.currency} {product.variants?.[0]?.price?.value}
                  </div>
                  <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-nexus-cyan/50 m-4" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-nexus-cyan/50 m-4" />
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h4 className="text-xl font-bold font-display mb-3 group-hover:text-nexus-cyan transition-colors">{product.name}</h4>
                  
                  {/* Clean up description and truncate */}
                  <div 
                    className="text-white/50 text-sm mb-6 flex-1 line-clamp-3 text-ellipsis"
                    dangerouslySetInnerHTML={{ __html: product.description || 'No data stream available for this artifact.' }}
                  />
                  
                  <a 
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-nexus-cyan hover:text-white transition-colors mt-auto"
                  >
                    Acquire Access <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
