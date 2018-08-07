"use strict";
const Constants = require ("../../../Constants");
const TreefolkShamanBase = require("../setTMMA/TreefolkShaman");

class TreefolkShaman extends TreefolkShamanBase {
  constructor (game) {
    super(game, "Treefolk Shaman", "Morningtide Tokens", "TMOR");
  }
}

module.exports = TreefolkShaman;
