"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TraumatizeBase = require("../setM10/Traumatize.js");

class Traumatize extends TraumatizeBase {
  constructor(game) {
    super(game, "Traumatize", "Odyssey", "ODY");
  }
}

module.exports = Traumatize;
