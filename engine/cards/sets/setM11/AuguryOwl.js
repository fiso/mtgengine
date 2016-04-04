"use strict";
const Constants = require ("../../../Constants");
const AuguryOwlBase = require("../setDDI/AuguryOwl");

class AuguryOwl extends AuguryOwlBase {
  constructor(game) {
    super(game, "Augury Owl", "Magic 2011", "M11");
  }
}

module.exports = AuguryOwl;
