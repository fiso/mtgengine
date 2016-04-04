"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RakdosCarnariumBase = require("../setARC/RakdosCarnarium.js");

class RakdosCarnarium extends RakdosCarnariumBase {
  constructor(game) {
    super(game, "Rakdos Carnarium", "Commander 2013 Edition", "C13");
  }
}

module.exports = RakdosCarnarium;
