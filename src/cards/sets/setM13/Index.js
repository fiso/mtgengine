"use strict";
const Constants = require ("../../../Constants");
const IndexBase = require("../setAPC/Index");

class Index extends IndexBase {
  constructor (game) {
    super(game, "Index", "Magic 2013", "M13");
  }
}

module.exports = Index;
