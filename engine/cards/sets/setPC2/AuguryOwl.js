"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AuguryOwlBase = require("../setDDI/AuguryOwl.js");

class AuguryOwl extends AuguryOwlBase {
  constructor(game) {
    super(game, "Augury Owl", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = AuguryOwl;
