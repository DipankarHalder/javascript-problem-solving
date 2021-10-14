const newArr = [ 
  { Phase: "Phase 1", Step: "Step 1", Task: "Task 1", Value: "5" },
  { Phase: "Phase 1", Step: "Step 1", Task: "Task 2", Value: "10" },
  { Phase: "Phase 1", Step: "Step 2", Task: "Task 1", Value: "15" },
  { Phase: "Phase 1", Step: "Step 2", Task: "Task 2", Value: "20" },
  { Phase: "Phase 2", Step: "Step 1", Task: "Task 1", Value: "25" },
  { Phase: "Phase 2", Step: "Step 1", Task: "Task 2", Value: "30" },
  { Phase: "Phase 2", Step: "Step 2", Task: "Task 1", Value: "35" },
  { Phase: "Phase 2", Step: "Step 2", Task: "Task 2", Value: "40" }
]

const groupBy = function(xs, key) {
  return xs.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

console.log(groupBy(newArr, 'Phase'));

// {
//   'Phase 1': [
//     { Phase: 'Phase 1', Step: 'Step 1', Task: 'Task 1', Value: '5' },
//     { Phase: 'Phase 1', Step: 'Step 1', Task: 'Task 2', Value: '10' },
//     { Phase: 'Phase 1', Step: 'Step 2', Task: 'Task 1', Value: '15' },
//     { Phase: 'Phase 1', Step: 'Step 2', Task: 'Task 2', Value: '20' }
//   ],
//   'Phase 2': [
//     { Phase: 'Phase 2', Step: 'Step 1', Task: 'Task 1', Value: '25' },
//     { Phase: 'Phase 2', Step: 'Step 1', Task: 'Task 2', Value: '30' },
//     { Phase: 'Phase 2', Step: 'Step 2', Task: 'Task 1', Value: '35' },
//     { Phase: 'Phase 2', Step: 'Step 2', Task: 'Task 2', Value: '40' }
//   ]
// }