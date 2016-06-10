"use strict";
const Constants = require ("../../../Constants");
const IndexBase = require("../setAPC/Index");

class Index extends IndexBase {
  constructor (game) {
    super(game, "Index", "Ninth Edition", "9ED");
  }
}

module.exports = Index;
