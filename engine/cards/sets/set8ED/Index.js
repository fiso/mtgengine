"use strict";
const Constants = require ("../../../Constants");
const IndexBase = require("../setAPC/Index");

class Index extends IndexBase {
  constructor(game) {
    super(game, "Index", "Eighth Edition", "8ED");
  }
}

module.exports = Index;
