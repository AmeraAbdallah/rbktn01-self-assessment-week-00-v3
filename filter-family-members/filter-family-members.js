// `filterFamilyMembers` accepts two arguments, a family tree object, and a truth test. `filterFamilyMembers`
// returns an array, in any order, of the full names of family members who pass the passed in truth test.
// You will need to use recursion in your solution in order to handle nested family trees.
//
// A family member looks like this:
//
// {
//   firstName: 'Fred'
//   lastName: 'Zirdung'
//   location: 'San Francsico'
//   children: [/* ... */]
// }
//
// EXAMPLE:
//
var familyTree = {
  'firstName': 'Beth',
  'lastName': 'Johnson',
  'location': 'San Francisco',
  'children': [
    {
      'firstName': 'Beth Jr.',
      'lastName': 'Johnson',
      'location': 'Berkeley',
      'children': [
        {
          'firstName': 'Smitty',
          'lastName': 'Won',
          'location': 'Beijing',
          'children': []
        }
      ]
    },
    {
      'firstName': 'Joshie',
      'lastName': 'Wyattson',
      'location': 'Berkeley',
      'children': []
    }
  ]
};

var livesInBerkeley = function (familyMember) {
  return familyMember.location === 'Berkeley';
}

filterFamilyMembers(familyTree, livesInBerkeley)
//
// returns ['Beth Jr. Johnson', 'Joshie Wyattson'];



var filterFamilyMembers = function (familyTree, truthTest, acc, result) {
  acc = acc || [];
  result = result || [];
  if(familyTree === undefined && familyTree['children'].length === 0){
    return acc;
  }
  var i = 0;
  while(familyTree !== undefined && familyTree['children'].length > 0){
    if(truthTest(familyTree['children'][i])){
      result.push(familyTree['firstName'] + " " +  familyTree['lastName']);
    }
    acc.push({firstName: familyTree['firstName'], lastName: familyTree['lastName'], location: familyTree['location']});
    filterFamilyMembers(familyTree.children[i],truthTest, acc, result);
    familyTree.children.slice(1);
    i++;
  }
  console.log(acc);
  console.log(result);
};

