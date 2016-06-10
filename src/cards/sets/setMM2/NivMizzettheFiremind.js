"use strict";
const Constants = require ("../../../Constants");
const NivMizzettheFiremindBase = require("../setpCMP/NivMizzettheFiremind");

class NivMizzettheFiremind extends NivMizzettheFiremindBase {
  constructor (game) {
    super(game, "Niv-Mizzet, the Firemind", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = NivMizzettheFiremind;
