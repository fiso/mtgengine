"use strict";
const Constants = require ("../../../Constants");
const TreefolkBase = require("../setTCMA/Treefolk");

class Treefolk extends TreefolkBase {
  constructor (game) {
    super(game, "Treefolk", "Commander 2014 Tokens", "TC14");
  }
}

module.exports = Treefolk;
