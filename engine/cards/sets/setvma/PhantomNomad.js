"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PhantomNomadBase = require("../setJUD/PhantomNomad.js");

class PhantomNomad extends PhantomNomadBase {
  constructor(game) {
    super(game, "Phantom Nomad", "Vintage Masters", "VMA");
  }
}

module.exports = PhantomNomad;
