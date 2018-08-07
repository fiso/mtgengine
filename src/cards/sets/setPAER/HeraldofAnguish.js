"use strict";
const Constants = require ("../../../Constants");
const HeraldofAnguishBase = require("../setAER/HeraldofAnguish");

class HeraldofAnguish extends HeraldofAnguishBase {
  constructor (game) {
    super(game, "Herald of Anguish", "Aether Revolt Promos", "PAER");
  }
}

module.exports = HeraldofAnguish;
