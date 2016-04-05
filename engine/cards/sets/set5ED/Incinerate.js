"use strict";
const Constants = require ("../../../Constants");
const IncinerateBase = require("../setCST/Incinerate");

class Incinerate extends IncinerateBase {
  constructor(game) {
    super(game, "Incinerate", "Fifth Edition", "5ED");
  }
}

module.exports = Incinerate;
