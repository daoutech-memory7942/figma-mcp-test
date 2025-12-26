import React from 'react';
import BtnSolid from './BtnSolid';

export default function ButtonSet() {
  return (
    <div className="grid grid-cols-2 gap-4 w-fit p-8 bg-gray-900">
      {/* Row 1 */}
      <BtnSolid type="primary" state="normal" />
      <BtnSolid type="secondary" state="normal" />

      {/* Row 2 */}
      <BtnSolid type="primary" state="hover" />
      <BtnSolid type="secondary" state="hover" />

      {/* Row 3 */}
      <BtnSolid type="normal" state="normal" />
      <BtnSolid type="normal" state="hover" />

      {/* Row 4 */}
      <BtnSolid type="ghost" state="normal" />
      <BtnSolid type="ghost" state="hover" />
    </div>
  );
}
