"use strict";
const Constants = require ("../../../Constants");
const AvacynsPilgrimBase = require("../setpFNM/AvacynsPilgrim");

class AvacynsPilgrim extends AvacynsPilgrimBase {
  constructor (game) {
    super(game, "Avacyn's Pilgrim", "Innistrad", "ISD");
  }
}

module.exports = AvacynsPilgrim;
