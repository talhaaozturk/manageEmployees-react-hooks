import React from "react";
import "./components/Employee";
import "./components/EmployeeList";
import EmployeeList from "./components/EmployeeList";
import EmployeeAdd from "./components/EmployeeAdd";
import EmployeeContextProvider from "./context/EmployeeContext";

function App() {
  return (
    <div className="App">
      <div class="container-lg">
        <div class="table-responsive">
          <div class="table-wrapper">
            <EmployeeContextProvider>
              <EmployeeList />
            </EmployeeContextProvider>
          </div>
        </div>
      </div>
    </div>
  );
}
//     <div class="container-lg">
//       <div class="table-responsive">
//         <div class="table-wrapper">
//           <div class="table-title">
//             <div class="row">
//               <div class="col-sm-8">
//                 <h2>
//                   Employee <b>Details</b>
//                 </h2>
//               </div>
//               <div class="col-sm-4">
//                 <button type="button" class="btn btn-info add-new">
//                   <i class="fa fa-plus"></i> Add New
//                 </button>
//               </div>
//             </div>
//           </div>
//           <table class="table table-bordered">
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Department</th>
//                 <th>Phone</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>John Doe</td>
//                 <td>Administration</td>
//                 <td>(171) 555-2222</td>
//                 <td>
//                   <a class="add" title="Add" data-toggle="tooltip">
//                     <i class="material-icons">&#xE03B;</i>
//                   </a>
//                   <a class="edit" title="Edit" data-toggle="tooltip">
//                     <i class="material-icons">&#xE254;</i>
//                   </a>
//                   <a class="delete" title="Delete" data-toggle="tooltip">
//                     <i class="material-icons">&#xE872;</i>
//                   </a>
//                 </td>
//               </tr>
//
//
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );

export default App;
