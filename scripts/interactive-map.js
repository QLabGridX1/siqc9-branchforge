
const nodes = [
  {
    id: 'root',
    label: 'SIQC9_BranchForge Core',
    children: [
      {
        id: 'node1',
        label: 'Quantum Conflict Escalation',
        children: [
          { id: 'n1-1', label: 'AI Misread Flare' },
          { id: 'n1-2', label: 'NATO Surveillance Surge' },
        ],
      },
      {
        id: 'node2',
        label: 'Geopolitical Disruptions',
        children: [
          { id: 'n2-1', label: 'Greenland Doctrine Triggered' },
          { id: 'n2-2', label: 'Orbital Denial Event' },
        ],
      },
      {
        id: 'node3',
        label: 'AI-Cyber Dynamics',
        children: [
          { id: 'n3-1', label: 'Cyber Ransom Cascade' },
          { id: 'n3-2', label: 'AI Weapon Leakage' },
        ],
      },
    ],
  },
];

function createNodeElement(node) {
  const div = document.createElement('div');
  div.className = 'node';
  div.textContent = node.label;
  if (node.children && node.children.length > 0) {
    div.classList.add('has-children');
    const childrenContainer = document.createElement('div');
    childrenContainer.className = 'children hidden';
    node.children.forEach((child) => {
      childrenContainer.appendChild(createNodeElement(child));
    });
    div.addEventListener('click', (e) => {
      e.stopPropagation();
      childrenContainer.classList.toggle('hidden');
    });
    div.appendChild(childrenContainer);
  }
  return div;
}

function renderMap() {
  const container = document.getElementById('map-container');
  container.innerHTML = '';
  const rootElement = createNodeElement(nodes[0]);
  container.appendChild(rootElement);
}

document.addEventListener('DOMContentLoaded', renderMap);
