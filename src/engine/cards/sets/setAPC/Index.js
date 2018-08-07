"use strict";
const Constants = require ("../../../Constants");
const IndexBase = require("../setM13/Index");

class Index extends IndexBase {
  constructor (game) {
    super(game, "Index", "Apocalypse", "APC");
  }
}

module.exports = Index;
