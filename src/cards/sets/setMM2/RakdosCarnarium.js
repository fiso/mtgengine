"use strict";
const Constants = require ("../../../Constants");
const RakdosCarnariumBase = require("../setARC/RakdosCarnarium");

class RakdosCarnarium extends RakdosCarnariumBase {
  constructor (game) {
    super(game, "Rakdos Carnarium", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = RakdosCarnarium;
