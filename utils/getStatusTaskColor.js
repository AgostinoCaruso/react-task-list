export function getStatusTaskColor(state) {
    switch (state) {
      case 'completed':
        return "bg-success text-white";
      case 'backlog':
        return 'bg-danger text-white';
      case 'in_progress':
        return 'bg-warning text-dark';
    }
  }