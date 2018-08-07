"use strict";
const Constants = require ("../../../Constants");
const RedwoodTreefolkBase = require("../set7ED/RedwoodTreefolk");

class RedwoodTreefolk extends RedwoodTreefolkBase {
  constructor (game) {
    super(game, "Redwood Treefolk", "Classic Sixth Edition", "6ED");
  }
}

module.exports = RedwoodTreefolk;
