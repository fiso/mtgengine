"use strict";
const Constants = require ("../../../Constants");
const UrzasAvengerBase = require("../setATQ/UrzasAvenger");

class UrzasAvenger extends UrzasAvengerBase {
  constructor(game) {
    super(game, "Urza's Avenger", "Fifth Edition", "5ED");
  }
}

module.exports = UrzasAvenger;
