'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function ProductForm() {
    const [priceInCents, setPriceInCents] = useState

  return (
    <form>
      <div className="space-y-8">
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" name="name" required />
      </div>

      <div className="space-y-8">
        <Label htmlFor="priceInCents">Price In Cents</Label>
        <Input type="number" id="priceInCents" name="priceInCents" required vallue={priceInCents} onChange={e => setPriceInCents(e.target.value)} />
      </div>
    </form>
  );
}
