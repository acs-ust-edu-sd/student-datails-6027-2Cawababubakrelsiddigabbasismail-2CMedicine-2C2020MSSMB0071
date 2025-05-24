
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const StudentInfo: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Student Information:</h1>
      
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="w-40 h-48 bg-gray-100 flex-shrink-0">
          <img 
            src="./lovable-uploads/be3cd315-2486-4c8f-8d8e-54cd9914c095.png" 
            alt="Student Photo" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-grow">
          <div className="space-y-2">
            <p><span className="font-semibold">Name:</span> اواب ابوبكرالصديق عباس اسماعيل</p>
            <p><span className="font-semibold">Program:</span> Medicine</p>
            <p><span className="font-semibold">Batch:</span> AB/0107/2020/MSSM</p>
            <p><span className="font-semibold">Level:</span> Four</p>
            <p><span className="font-semibold">Student E-mail:</span> 2020mssmb0071@ust.edu.sd</p>
            <p><span className="font-semibold">Location:</span> Egypt - Cairo</p>
            <p className="text-green-600 font-semibold">Allowed to enter.</p>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Installments to Pay:</h2>
        
        <div className="overflow-x-auto">
          <table className="student-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Service</th>
                <th>Currency</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>15-03-2025</td>
                <td>Service Fee/Training fees</td>
                <td>AED</td>
                <td>4,050.00</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={3} className="text-center font-semibold">AED Installment Total</td>
                <td className="font-semibold">4,050.00</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentInfo;
