"use strict";
const Constants = require ("../../../Constants");
const PhantomNomadBase = require("../setJUD/PhantomNomad");

class PhantomNomad extends PhantomNomadBase {
  constructor (game) {
    super(game, "Phantom Nomad", "Vintage Masters", "VMA");
  }
}

module.exports = PhantomNomad;
