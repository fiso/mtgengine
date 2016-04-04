"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KathariRemnantBase = require("../setARB/KathariRemnant.js");

class KathariRemnant extends KathariRemnantBase {
  constructor(game) {
    super(game, "Kathari Remnant", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = KathariRemnant;
