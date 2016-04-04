"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PestermiteBase = require("../setLRW/Pestermite.js");

class Pestermite extends PestermiteBase {
  constructor(game) {
    super(game, "Pestermite", "Modern Masters", "MMA");
  }
}

module.exports = Pestermite;
