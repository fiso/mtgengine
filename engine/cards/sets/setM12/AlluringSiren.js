"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AlluringSirenBase = require("../setM10/AlluringSiren.js");

class AlluringSiren extends AlluringSirenBase {
  constructor(game) {
    super(game, "Alluring Siren", "Magic 2012", "M12");
  }
}

module.exports = AlluringSiren;
