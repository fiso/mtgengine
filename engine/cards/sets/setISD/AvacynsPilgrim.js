"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AvacynsPilgrimBase = require("../setpFNM/AvacynsPilgrim.js");

class AvacynsPilgrim extends AvacynsPilgrimBase {
  constructor(game) {
    super(game, "Avacyn's Pilgrim", "Innistrad", "ISD");
  }
}

module.exports = AvacynsPilgrim;
