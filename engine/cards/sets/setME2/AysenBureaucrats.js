"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AysenBureaucratsBase = require("../set5ED/AysenBureaucrats.js");

class AysenBureaucrats extends AysenBureaucratsBase {
  constructor(game) {
    super(game, "Aysen Bureaucrats", "Masters Edition II", "ME2");
  }
}

module.exports = AysenBureaucrats;
