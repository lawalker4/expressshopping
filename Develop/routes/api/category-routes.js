const router = require('express').Router();
const { Category, Product } = require('../../models');
const { update } = require('../../models/Category');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Comment.findAll({
    include: [
      {
        model: Product,
        attributes: ["product_name"]
      },
    ],
  })
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch (err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Product,
        attributes: ['id','product_name','price', 'stock','category_id'],
      },
    ]
  })
  .then(dbCategoryData => {
    if(!dbCategoryData) {
      res.status(404).json({ message: 'No item found with this id'});
      return;
    }
    res.json(dbCategoryData);
  })
  .catch(err => {
    console.log(err);
  });
});

router.post('/', (req, res) => {
  // create a new category

});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Catagor.update(
    {
      title: eq.body.Category,

    }

  )
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where:{
      id:req.params.id
    }
  })
  .then(dbCategoryData => {
    if (!dbCategoryData) {
      res.status(404).json({message:'No comment found with this id! Try Again.'});
      return;
    }
    res.json(dbCategoryData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
