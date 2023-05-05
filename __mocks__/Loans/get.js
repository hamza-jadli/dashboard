module.exports = (req, res) => {
  res.send([
    {
      id: '1',
      id_student: 'aqwszxdc',
      orderDate: new Date().getTime(),
      status: 'completed',
      id_book: 'bhnjuiotgsf',
      duration: '13 jours'
    },
    {
      id: '2',
      id_student: 'ghjkloiuy',
      orderDate: new Date().getTime(),
      status: 'completed',
      id_book: 'nbvcxwqsd',
      duration: '10 jours'
    },
    {
      id: '3',
      id_student: 'bcvdfgtmlpoi',
      orderDate: new Date().getTime(),
      status: 'completed',
      id_book: 'hejdkolur',
      duration: '9 jours'
    },
    {
      id: '4',
      id_student: 'jhvhjidziokn',
      orderDate: new Date().getTime(),
      status: 'completed',
      id_book: 'vhtgldyfjdh',
      duration: '3 jours'
    }
  ]);
};
