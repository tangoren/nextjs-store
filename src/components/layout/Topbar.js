import { RiTruckLine } from "@remixicon/react";

export default function Topbar() {
  return (
    <div className="flex items-center justify-center gap-1 py-3 text-sm font-semibold text-center text-white bg-indigo-600">
      <RiTruckLine /> Get free delivery on orders over $75
    </div>
  );
}
