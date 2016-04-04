"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AuguryOwlBase = require("../setDDI/AuguryOwl.js");

class AuguryOwl extends AuguryOwlBase {
  constructor(game) {
    super(game, "Augury Owl", "Magic 2011", "M11");
  }
}

module.exports = AuguryOwl;
