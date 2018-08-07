"use strict";
const Constants = require ("../../../Constants");
const KothophedSoulHoarderBase = require("../setPORI/KothophedSoulHoarder");

class KothophedSoulHoarder extends KothophedSoulHoarderBase {
  constructor (game) {
    super(game, "Kothophed, Soul Hoarder", "Magic Origins", "ORI");
  }
}

module.exports = KothophedSoulHoarder;
