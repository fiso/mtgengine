"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RedwoodTreefolkBase = require("../set6ED/RedwoodTreefolk.js");

class RedwoodTreefolk extends RedwoodTreefolkBase {
  constructor(game) {
    super(game, "Redwood Treefolk", "Seventh Edition", "7ED");
  }
}

module.exports = RedwoodTreefolk;
