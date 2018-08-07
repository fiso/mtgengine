"use strict";
const Constants = require ("../../../Constants");
const LeovoldEmissaryofTrestBase = require("../setPZ2/LeovoldEmissaryofTrest");

class LeovoldEmissaryofTrest extends LeovoldEmissaryofTrestBase {
  constructor (game) {
    super(game, "Leovold, Emissary of Trest", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = LeovoldEmissaryofTrest;
