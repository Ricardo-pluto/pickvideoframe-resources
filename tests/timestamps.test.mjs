import test from 'node:test';import assert from 'node:assert/strict';import {timestamps} from '../tools/timestamps.mjs';
test('documented three-second export excludes end boundary',()=>assert.deepEqual(timestamps(0,3,1),[0,1,2]));
test('offset and non-divisible interval retain last request before end',()=>assert.deepEqual(timestamps(2,7,2),[2,4,6]));
test('adjacent ranges do not repeat their shared boundary',()=>assert.deepEqual([...timestamps(0,2,1),...timestamps(2,4,1)],[0,1,2,3]));
test('invalid and oversized schedules are refused',()=>{for(const args of [[0,0,1],[0,1,0],[-1,1,1],[0,Infinity,1],[0,1,0.000001]])assert.throws(()=>timestamps(...args));});
