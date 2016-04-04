"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TraumatizeBase = require("../setM10/Traumatize.js");

class Traumatize extends TraumatizeBase {
  constructor(game) {
    super(game, "Traumatize", "Magic 2011", "M11");
  }
}

module.exports = Traumatize;
