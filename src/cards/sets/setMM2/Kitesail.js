"use strict";
const Constants = require ("../../../Constants");
const KitesailBase = require("../setM13/Kitesail");

class Kitesail extends KitesailBase {
  constructor (game) {
    super(game, "Kitesail", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = Kitesail;
