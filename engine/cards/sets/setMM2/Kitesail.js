"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KitesailBase = require("../setM13/Kitesail.js");

class Kitesail extends KitesailBase {
  constructor(game) {
    super(game, "Kitesail", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = Kitesail;
