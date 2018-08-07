"use strict";
const Constants = require ("../../../Constants");
const SimaYiWeiFieldMarshalBase = require("../setPZ2/SimaYiWeiFieldMarshal");

class SimaYiWeiFieldMarshal extends SimaYiWeiFieldMarshalBase {
  constructor (game) {
    super(game, "Sima Yi, Wei Field Marshal", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = SimaYiWeiFieldMarshal;
