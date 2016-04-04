"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RakdosCarnariumBase = require("../setARC/RakdosCarnarium.js");

class RakdosCarnarium extends RakdosCarnariumBase {
  constructor(game) {
    super(game, "Rakdos Carnarium", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = RakdosCarnarium;
