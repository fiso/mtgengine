"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EbonyRhinoBase = require("../setHML/EbonyRhino.js");

class EbonyRhino extends EbonyRhinoBase {
  constructor(game) {
    super(game, "Ebony Rhino", "Masters Edition IV", "ME4");
  }
}

module.exports = EbonyRhino;
