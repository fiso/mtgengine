"use strict";
const Constants = require ("../../../Constants");
const HeraldofthePantheonBase = require("../setC18/HeraldofthePantheon");

class HeraldofthePantheon extends HeraldofthePantheonBase {
  constructor (game) {
    super(game, "Herald of the Pantheon", "Magic Origins", "ORI");
  }
}

module.exports = HeraldofthePantheon;
