"use strict";
const Constants = require ("../../../Constants");
const MycolothBase = require("../setC15/Mycoloth");

class Mycoloth extends MycolothBase {
  constructor(game) {
    super(game, "Mycoloth", "Shards of Alara", "ALA");
  }
}

module.exports = Mycoloth;
