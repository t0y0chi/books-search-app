export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="animate-pulse">
          <div className="h-10 w-32 bg-muted rounded mb-4" />
          <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
            <div className="aspect-[3/4] bg-muted rounded-lg" />
            <div>
              <div className="h-8 bg-muted rounded w-3/4 mb-4" />
              <div className="h-6 bg-muted rounded w-1/2 mb-4" />
              <div className="space-y-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-4 bg-muted rounded" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
