#ifdef __OBJC__
#import <UIKit/UIKit.h>
#else
#ifndef FOUNDATION_EXPORT
#if defined(__cplusplus)
#define FOUNDATION_EXPORT extern "C"
#else
#define FOUNDATION_EXPORT extern
#endif
#endif
#endif

#import "ObjCFoo.h"
#import "SwiftVisioniOSPlugin.h"

FOUNDATION_EXPORT double swift_vision_iosVersionNumber;
FOUNDATION_EXPORT const unsigned char swift_vision_iosVersionString[];

