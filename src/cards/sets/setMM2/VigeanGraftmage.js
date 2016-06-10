"use strict";
const Constants = require ("../../../Constants");
const VigeanGraftmageBase = require("../setDIS/VigeanGraftmage");

class VigeanGraftmage extends VigeanGraftmageBase {
  constructor (game) {
    super(game, "Vigean Graftmage", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = VigeanGraftmage;
