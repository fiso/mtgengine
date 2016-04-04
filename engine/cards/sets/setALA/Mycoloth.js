"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MycolothBase = require("../setC15/Mycoloth.js");

class Mycoloth extends MycolothBase {
  constructor(game) {
    super(game, "Mycoloth", "Shards of Alara", "ALA");
  }
}

module.exports = Mycoloth;
