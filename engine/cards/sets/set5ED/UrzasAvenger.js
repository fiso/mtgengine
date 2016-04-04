"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UrzasAvengerBase = require("../setATQ/UrzasAvenger.js");

class UrzasAvenger extends UrzasAvengerBase {
  constructor(game) {
    super(game, "Urza's Avenger", "Fifth Edition", "5ED");
  }
}

module.exports = UrzasAvenger;
